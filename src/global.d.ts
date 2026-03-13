declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | NodeList | (string | Element)[], vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(force?: boolean): void;
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): void;
  }
}
