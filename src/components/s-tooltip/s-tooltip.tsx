import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 's-tooltip',
  styleUrl: 's-tooltip.css',
  shadow: true,
})
export class STooltip {

  @Element() hostElement: HTMLSTooltipElement;

  render() {
    return (
      <Host>
        <div
          id="content-container"
          onMouseOver={event => {
            this.toggleContent(true);
            this.setContentPosition(event.x, event.y);
          }}
          onMouseOut={() => this.toggleContent(false)}
        >
          <slot></slot>
        </div>
        <div id="tooltip-container">
          <slot name="tooltip"></slot>
        </div>
      </Host >
    );
  }

  private toggleContent(displayed: boolean) {
    this.hostElement.style.setProperty('--content-display', displayed ? 'block' : 'none');
  }

  private setContentPosition(left: number, top: number) {
    this.hostElement.style.setProperty('--tooltip-left', `${left}px`);
    this.hostElement.style.setProperty('--tooltip-top', `${top}px`);
  }

}
