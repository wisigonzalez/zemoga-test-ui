import Queries from '@graphql/queries';
import Mutations from '@graphql/mutations';
import Serializers from '@graphql/serializers';
import { cmsLocales } from '@config/constants';
import { GraphQLClient } from 'graphql-request';

class CmsLoader {
  static boot(App) {
    const { cms } = App.config;
    const graphQLClient = new GraphQLClient(cms.endpoint, {
      headers: {
        authorization: `Bearer ${cms.apiKey}`
      }
    });
    const queriesRequests = Object.keys(Queries).map((query) => ({
      [query]: (locale = cmsLocales.es, variablesParam = {}) => {
        const variables = JSON.stringify({
          ...variablesParam,
          locales: [locale]
        });
        const queryString =
          typeof Queries[query] === 'function'
            ? Queries[query]({ locale, ...variablesParam })
            : Queries[query];
        if (Serializers[query]) {
          return Serializers[query](
            graphQLClient.request(queryString, variables)
          );
        }
        return graphQLClient.request(Queries[query], variables);
      }
    }));
    const mutationsRequests = Object.keys(Mutations).map((mutation) => ({
      [mutation]: (variables = null) =>
        graphQLClient.request(Mutations[mutation], variables)
    }));
    App.cms = Object.assign({}, ...queriesRequests, ...mutationsRequests);
  }
}

export default CmsLoader;
