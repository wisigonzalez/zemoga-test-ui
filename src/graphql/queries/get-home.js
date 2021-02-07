export default `query Home($locales: [Locale!]!) {
  zePages(locales: $locales) {
    sections {
        title
        content {
            ...on ZeAccessBar {
                title
                links {
                    text
                    url
                }
            }
            ...on ZeBanner {
                image { 
                    fileName
                    url
                }
                opinionCard {
                    title
                    subtitle
                    description
                    link {
                        icon {
                            fileName
                            url
                        }
                        text
                        url
                    }
                    question
                }
            }
            ...on ZeClosingBar {
                title
                subtitle
            }
            ... on ZeFooter {
                links {
                    text
                    url
                }
                followText
                socialNetwork {
                    links {
                        icon {
                            fileName
                            url
                        }
                        url
                    }
                }
            }
        }
    }
  }
}
`;
