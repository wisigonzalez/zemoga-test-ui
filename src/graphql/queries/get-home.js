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
                days
                subtitle
            }
            ...on ZePopup {
                title
                subtitle
                description
            }
            ...on ZeVoteList {
                voteCards {
                    image {
                        fileName
                        url
                    }
                    title
                    subtitle
                    complement
                    description
                    voteNow
                    voteAgain
                    message
                    likeVotes
                    dislikeVotes
                }
            }
            ... on ZeSecondaryBanner {
                image {
                    fileName
                    url
                }
                title
                link {
                    text
                    url
                }
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
