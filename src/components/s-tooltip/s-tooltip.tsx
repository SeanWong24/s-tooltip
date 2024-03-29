import { Component, Host, h, Element, Prop, Watch, ComponentInterface, Method } from '@stencil/core';

@Component({
  tag: 's-tooltip',
  styleUrl: 's-tooltip.css',
  shadow: true,
})
export class STooltip implements ComponentInterface {

  private shouldShowTooltip: boolean = false;
  private attachedElements: HTMLElement[] | NodeListOf<HTMLElement> = [];

  private _isTooltipEnabled = false;
  private get isTooltipEnabled() {
    return this._isTooltipEnabled;
  }
  private set isTooltipEnabled(value: boolean) {
    if (value !== this._isTooltipEnabled) {
      this._isTooltipEnabled = value;
      this.updateCSSVariable('--tooltip-display', value ? 'block' : 'none');

      if (!value) {
        this.hostElement.shadowRoot.querySelector('#tooltip-container').innerHTML = '<slot/>';
      }
    }
  }

  private readonly mouseoverHandler = event => {
    this.shouldShowTooltip = true;
    setTimeout(() => {
      if (event.target.matches(':hover')) {
        this.isTooltipEnabled = true;
        const tooltipText = event.target.getAttribute('data-s-tooltip-text');
        this.updateTooltipText(tooltipText);
        this.updateTooltipPosition(event);
      }
    }, this.showDelay);
  };

  private readonly mouseoutHandler = () => {
    this.shouldShowTooltip = false;
    setTimeout(() => {
      if (!this.shouldShowTooltip) {
        this.isTooltipEnabled = false;
      }
    }, this.hideDelay);
  };

  private readonly mousemoveHandler = event => {
    if (this.shouldShowTooltip) {
      const tooltipText = event.target.getAttribute('data-s-tooltip-text');
      this.updateTooltipText(tooltipText);
      this.updateTooltipPosition(event);
    }
  };

  @Element() hostElement: HTMLSTooltipElement;

  @Prop({ reflect: true }) margin: number = 10;
  @Prop({ reflect: true }) orientation: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @Prop({ reflect: true }) followMouse: boolean = false;
  @Prop({ reflect: true }) noDefaultStyle: boolean = false;
  @Prop({ reflect: true }) noArrow: boolean = false;
  @Prop({ reflect: true }) attachTo: string | HTMLElement[];
  @Prop({ reflect: true }) showDelay: number = 100;
  @Prop({ reflect: true }) hideDelay: number = 100;
  @Prop({ reflect: true }) color: string = 'white';
  @Prop({ reflect: true }) backgroundColor: string = 'black';
  @Prop({ reflect: true }) maxWidth: string = '500px';
  @Prop({ reflect: true }) maxHeight: string = '300px';
  @Prop({ reflect: true }) borderWidth: string = '0px';
  @Prop({ reflect: true }) borderColor: string = 'white';
  @Prop({ reflect: true }) opacity: number = .8;
  @Prop({ reflect: true }) zIndex: number = 99999;
  @Prop({ reflect: true }) shadow: string = '0px 5px 10px 0px grey';
  @Prop({ reflect: true }) borderRadius: string = '10px';
  @Prop({ reflect: true }) arrowSize: string = '10px';

  @Watch('color')
  updateColor(value: string) {
    this.updateCSSVariable('--tooltip-color', value);
  }

  @Watch('backgroundColor')
  updateBackgroundColor(value: string) {
    this.updateCSSVariable('--tooltip-background-color', value);
  }

  @Watch('maxWidth')
  updateMaxWidth(value: string) {
    this.updateCSSVariable('--tooltip-max-width', value);
  }

  @Watch('maxHeight')
  updateMaxHeight(value: string) {
    this.updateCSSVariable('--tooltip-max-height', value);
  }

  @Watch('borderWidth')
  updateBorderWidth(value: string) {
    this.updateCSSVariable('--tooltip-border-width', value);
  }

  @Watch('borderColor')
  updateBorderColor(value: string) {
    this.updateCSSVariable('--tooltip-border-color', value);
  }

  @Watch('opacity')
  updateOpacity(value: number) {
    this.updateCSSVariable('--tooltip-opacity', value.toString());
  }

  @Watch('zIndex')
  updateZIndex(value: number) {
    this.updateCSSVariable('--tooltip-z-index', value.toString());
  }

  @Watch('shadow')
  updateShadow(value: string) {
    this.updateCSSVariable('--tooltip-shadow', value);
  }

  @Watch('borderRadius')
  updateBorderRadius(value: string) {
    this.updateCSSVariable('--tooltip-border-radius', value);
  }

  @Watch('arrowSize')
  updateArrowSize(value: string) {
    this.updateCSSVariable('--tooltip-arrow-size', value);
  }

  connectedCallback() {
    this.initializeCSSVariables();
  }

  componentWillRender() {
    this.setEventsForAttachedElements();
  }

  @Method()
  async forceUpdateAttachedElements() {
    this.setEventsForAttachedElements();
  }

  render() {
    return (
      <Host>
        <div
          id="tooltip-container"
          class={[
            this.orientation,
            this.noDefaultStyle ? '' : 'styled',
            this.noArrow ? '' : 'arrow'
          ].join(' ')}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }

  private updateTooltipText(text: string) {
    if (text) {
      this.hostElement.shadowRoot.querySelector('#tooltip-container').innerHTML = text;
    }
  }

  private updateTooltipPosition(mouseEvent: MouseEvent) {
    let x = 0, y = 0;
    const targetElement = mouseEvent.target as HTMLElement;

    if (this.followMouse) {
      x = mouseEvent.x;
      y = mouseEvent.y;
    } else {
      const { top, right, bottom, left, width, height } = targetElement.getBoundingClientRect();
      switch (this.orientation) {
        case 'top':
          x = right - width / 2;
          y = top;
          break;
        case 'right':
          x = right;
          y = bottom - height / 2;
          break;
        case 'bottom':
          x = right - width / 2;
          y = bottom;
          break;
        case 'left':
          x = left;
          y = bottom - height / 2;
          break;
      }
    }
    this.setTooltipPosition(x, y);
  }

  private setTooltipPosition(x: number, y: number) {
    const tooltipContainerElement = this.hostElement.shadowRoot.querySelector('#tooltip-container');
    const tooltipWidth = tooltipContainerElement.clientWidth;
    const tooltipHeight = tooltipContainerElement.clientHeight;

    let tooltipLeft = x;
    let tooltipTop = y;

    switch (this.orientation) {
      case 'top':
        tooltipLeft = x - tooltipWidth / 2;
        tooltipTop = y - tooltipHeight - this.margin;
        break;
      case 'right':
        tooltipLeft = x + this.margin;
        tooltipTop = y - tooltipHeight / 2;
        break;
      case 'bottom':
        tooltipLeft = x - tooltipWidth / 2;
        tooltipTop = y + this.margin;
        break;
      case 'left':
        tooltipLeft = x - tooltipWidth - this.margin; 255
        tooltipTop = y - tooltipHeight / 2;
        break;
    }

    this.updateCSSVariable('--tooltip-left', `${tooltipLeft}px`);
    this.updateCSSVariable('--tooltip-top', `${tooltipTop}px`);
  }

  private setEventsForAttachedElements() {
    this.attachedElements.forEach(attachedElement => {
      attachedElement?.removeEventListener('mouseover', this.mouseoverHandler);
      attachedElement?.removeEventListener('mouseout', this.mouseoutHandler);
      attachedElement?.removeEventListener('mousemove', this.mousemoveHandler);
    });
    this.updateAttachedElements();
    this.attachedElements.forEach(attachedElement => {
      attachedElement.addEventListener('mouseover', this.mouseoverHandler);
      attachedElement.addEventListener('mouseout', this.mouseoutHandler);
      attachedElement.addEventListener('mousemove', this.mousemoveHandler);
    });
  }

  private updateAttachedElements() {
    if (this.attachTo) {
      if (typeof this.attachTo === 'string') {
        this.attachedElements = document.querySelectorAll(this.attachTo) as NodeListOf<HTMLElement>;
      } else {
        this.attachedElements = this.attachTo;
      }
    } else {
      this.attachedElements = [this.hostElement.parentElement];
    }
  }

  private initializeCSSVariables() {
    this.updateColor(this.color);
    this.updateBackgroundColor(this.backgroundColor);
    this.updateMaxWidth(this.maxWidth);
    this.updateMaxHeight(this.maxHeight);
    this.updateBorderWidth(this.borderWidth);
    this.updateBorderColor(this.borderColor);
    this.updateOpacity(this.opacity);
    this.updateZIndex(this.zIndex);
    this.updateShadow(this.shadow);
    this.updateBorderRadius(this.borderRadius);
    this.updateArrowSize(this.arrowSize);
  }

  private updateCSSVariable(variableName: string, value: string) {
    this.hostElement.style.setProperty(variableName, value);
  }

}
