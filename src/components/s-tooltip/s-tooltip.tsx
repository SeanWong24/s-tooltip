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
      this.hostElement.style.setProperty('--content-display', value ? 'block' : 'none');
    }
  }

  @Element() hostElement: HTMLSTooltipElement;

  @Prop() margin: number = 10;
  @Prop() position: 'top' | 'right' | 'bottom' | 'left' = 'bottom';

  render() {
    return (
      <Host>
        <div
          id="content-container"
          onMouseOver={() => this.isTooltipEnabled = true}
          onMouseOut={() => this.isTooltipEnabled = false}
          onMouseMove={event => {
            this.setContentPosition(event.x, event.y)
          }}
        >
          <slot></slot>
        </div>
        <div id="tooltip-container">
          <slot name="tooltip"></slot>
        </div>
      </Host >
    );
  }

  private setContentPosition(left: number, top: number) {
    const tooltipContainerElement = this.hostElement.shadowRoot.querySelector('#tooltip-container');
    const tooltipWidth = tooltipContainerElement.clientWidth;
    const tooltipHeight = tooltipContainerElement.clientHeight;

    let tooltipLeft = left;
    let tooltipTop = top;

    switch (this.position) {
      case 'top':
        tooltipLeft = left - tooltipWidth / 2;
        tooltipTop = top - tooltipHeight - this.margin;
        break;
      case 'right':
        tooltipLeft = left + this.margin;
        tooltipTop = top - tooltipHeight / 2;
        break;
      case 'bottom':
        tooltipLeft = left - tooltipWidth / 2;
        tooltipTop = top + this.margin;
        break;
      case 'left':
        tooltipLeft = left - tooltipWidth - this.margin;
        tooltipTop = top - tooltipHeight / 2;
        break;
    }

    this.hostElement.style.setProperty('--tooltip-left', `${tooltipLeft}px`);
    this.hostElement.style.setProperty('--tooltip-top', `${tooltipTop}px`);
  }

}
