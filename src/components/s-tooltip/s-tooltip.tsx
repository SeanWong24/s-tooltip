import { Component, Host, h, Element, Prop } from '@stencil/core';

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

  render() {
    return (
      <Host>
        <div
          id="content-container"
          onMouseOver={() => this.isTooltipEnabled = true}
          onMouseOut={() => this.isTooltipEnabled = false}
          onMouseMove={event => this.updateTooltipPosition(event)}
        >
          <slot></slot>
        </div>
        <div
          id="tooltip-container"
          class={this.noDefaultStyle ? null : 'styled'}
        >
          <slot name="tooltip"></slot>
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
      const tooltipContainerElement = this.hostElement.shadowRoot.querySelector('#content-container');
      const { top, right, bottom, left, width, height } = tooltipContainerElement.getBoundingClientRect();

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
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `rgba(0, 0, 0, .7) transparent transparent transparent`);
        break;
      case 'right':
        tooltipLeft = x + this.margin;
        tooltipTop = y - tooltipHeight / 2;
        this.hostElement.style.setProperty('--tooltip-arrow-top', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-right', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-top', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent rgba(0, 0, 0, .7) transparent transparent`);
        break;
      case 'bottom':
        tooltipLeft = x - tooltipWidth / 2;
        tooltipTop = y + this.margin;
        this.hostElement.style.setProperty('--tooltip-arrow-bottom', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-left', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-left', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent transparent rgba(0, 0, 0, .7) transparent`);
        break;
      case 'left':
        tooltipLeft = x - tooltipWidth - this.margin;
        tooltipTop = y - tooltipHeight / 2;
        this.hostElement.style.setProperty('--tooltip-arrow-top', `50%`);
        this.hostElement.style.setProperty('--tooltip-arrow-left', `100%`);
        this.hostElement.style.setProperty('--tooltip-arrow-margin-top', `-5px`);
        this.hostElement.style.setProperty('--tooltip-arrow-border-color', `transparent transparent transparent rgba(0, 0, 0, .7)`);
        break;
    }

    this.hostElement.style.setProperty('--tooltip-left', `${tooltipLeft}px`);
    this.hostElement.style.setProperty('--tooltip-top', `${tooltipTop}px`);
  }

}
