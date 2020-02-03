interface GlobalPage {
    readonly render: (elem: HTMLElement|string)=>void;
    readonly setTitle: (title: string)=>void;
}

declare let GP:GlobalPage;