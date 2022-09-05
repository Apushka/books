export type FormDataType = {
    category: string
    search: string
    sorting: string
}
export type IndustryIdentifiersType = {
    type: string,
    identifier: string
}
export type VolumeInfoType = {
    title: string,
    authors: Array<string>,
    publisher: string,
    publishedDate: string,
    description: string,
    industryIdentifiers: Array<IndustryIdentifiersType>,
    readingModes: {
        text: boolean,
        image: boolean
    },
    printType: string,
    categories: Array<string>
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
    },
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
        small: string
        meduim: string
        large: string
        extraLarge: string
    },
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}
export type OffersType = {
    finskyOfferType: number,
    listPrice: {
        amountInMicros: number,
        currencyCode: string
    },
    retailPrice: {
        amountInMicros: number,
        currencyCode: string
    }
}
export type SalesInfoType = {
    country: string,
    saleability: string,
    isEbook: boolean,
    listPrice: {
        amount: number,
        currencyCode: string
    },
    retailPrice: {
        amount: number,
        currencyCode: string
    },
    buyLink: string,
    offers: Array<OffersType>
}
export type AccessInfoType = {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
        isAvailable: boolean
        acsTokenLink: string
    },
    pdf: {
        isAvailable: boolean
        acsTokenLink: string
    },
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}
export type SearchInfoType = {
    textSnippet: string
}

export type ItemType = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: VolumeInfoType
    saleInfo: SalesInfoType
    accessInfo: AccessInfoType,
    searchInfo: SearchInfoType
}