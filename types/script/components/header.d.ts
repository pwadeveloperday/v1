import { LitElement } from 'lit';
export declare class AppHeader extends LitElement {
    enableBack: boolean;
    static get styles(): import("lit").CSSResult;
    constructor();
    updated(changedProperties: any): void;
    share(): void;
    render(): import("lit-html").TemplateResult<1>;
}
