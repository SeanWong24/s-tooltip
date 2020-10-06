import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 's-tooltip',
  styleUrl: 's-tooltip.css',
  shadow: true,
})
export class STooltip {

  render() {
    return (
      <Host>
        S Tooltip
      </Host>
    );
  }

}
