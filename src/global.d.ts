interface GlobalPage {
    render: (elem: HTMLElement|string)=>void;
    setTitle: (title: string)=>void;
}

declare let GP:GlobalPage;