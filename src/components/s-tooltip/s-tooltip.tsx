import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 's-tooltip',
  styleUrl: 's-tooltip.css',
  shadow: true,
})
export class STooltip {

  private _isTooltipEnabled = false;
  private get isTooltipEnabled() {
    return this._isTooltipEnabled;
  }
  private set isTooltipEnabled(value: boolean) {
    if (value !== this._isTooltipEnabled) {
      this._isTooltipEnabled = value;
      this.hostElement.style.setProperty('--tooltip-display', value ? 'block' : 'none');
    }
  }

  @Element() hostElement: HTMLSTooltipElement;

  @Prop({ reflect: true }) margin: number = 10;
  @Prop({ reflect: true }) position: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @Prop({ reflect: true }) followMouse: boolean = false;
  @Prop({ reflect: true }) noDefaultStyle: boolean = false;
  @Prop({ reflect: true }) backgroundColor: string = 'rgba(0, 0, 0, .7)';
  @Prop({ reflect: true }) maxWidth: string = '500px';
  @Prop({ reflect: true }) maxHeight: string = '300px';

  @Watch('backgroundColor') updateBackgroundColor(value: string) {
    this.hostElement.style.setProperty('--tooltip-background-color', value);
  }
  @Watch('maxWidth') updateMaxWidth(value: string) {
    this.hostElement.style.setProperty('--tooltip-max-width', value);
  }
  @Watch('maxHeight') updateMaxHeight(value: string) {
    this.hostElement.style.setProperty('--tooltip-max-height', value);
  }

  connectedCallback() {
    const parentElement = this.hostElement.parentElement;
    parentElement.addEventListener('mouseover', () => this.isTooltipEnabled = true);
    parentElement.addEventListener('mouseout', () => this.isTooltipEnabled = false);
    parentElement.addEventListener('mousemove', event => this.updateTooltipPosition(event));

    this.updateBackgroundColor(this.backgroundColor);
    this.updateMaxWidth(this.maxWidth);
    this.updateMaxHeight(this.maxHeight);
  }

  render() {
    return (
      <Host>
        <div
          id="tooltip-container"
          class={this.noDefaultStyle ? null : 'styled'}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }

  private updateTooltipPosition(mouseEvent: MouseEvent) {
    let x = 0, y = 0;
    if (this.followMouse) {
      x = mouseEvent.x;
      y = mouseEvent.y;
    } else {
      const parentElement = this.hostElement.parentElement;
      const { top, right, bottom, left, width, height } = parentElement.getBoundingClientRect();

      switch (this.position) {
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

    switch (this.position) {
      case 'top':
        tooltipLeft = x - tooltipWidth / 2;
        tooltipTop = y - tooltipHeight - this.margin;
        this.hostElement.style.setProperty('--tooltip-arrow-top', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-left', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-left', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `${this.backgroundColor} transparent transparent transparent`);
        break;
      case 'right':
        tooltipLeft = x + this.margin;
        tooltipTop = y - tooltipHeight / 2;
        this.hostElement.style.setProperty('--tooltip-arrow-top', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-right', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-top', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent ${this.backgroundColor} transparent transparent`);
        break;
      case 'bottom':
        tooltipLeft = x - tooltipWidth / 2;
        tooltipTop = y + this.margin;
        this.hostElement.style.setProperty('--tooltip-arrow-bottom', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-left', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-left', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent transparent ${this.backgroundColor} transparent`);
        break;
      case 'left':
        tooltipLeft = x - tooltipWidth - this.margin;
        tooltipTop = y - tooltipHeight / 2;
        this.hostElement.style.setProperty('--tooltip-arrow-top', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-left', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-top', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent transparent transparent ${this.backgroundColor}`);
        break;
    }

    this.hostElement.style.setProperty('--tooltip-left', `${tooltipLeft}px`);
    this.hostElement.style.setProperty('--tooltip-top', `${tooltipTop}px`);
  }

}
