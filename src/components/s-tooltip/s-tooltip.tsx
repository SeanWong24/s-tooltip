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

  render() {
    return (
      <Host>
        <div
          id="content-container"
          onMouseOver={() => this.isTooltipEnabled = true}
          onMouseOut={() => this.isTooltipEnabled = false}
          onMouseMove={event => {
            debugger
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
    this.hostElement.style.setProperty('--tooltip-left', `${left}px`);
    this.hostElement.style.setProperty('--tooltip-top', `${top}px`);
  }

}
