document
  .querySelectorAll(
    ".ytp-ce-element, .ytp-ce-covering-overlay, .ytp-ce-element-shadow, .ytp-ce-covering-image, .ytp-ce-expanding-image, .ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-element-show.ytp-ce-bottom-right-quad.ytp-ce-size-640, .ytp-ce-element.ytp-ce-video.ytp-ce-element-show, .ytp-expand, .ytp-pause-overlay, #watch7-sidebar-contents, .ytp-suggestion-set.ytp-videowall-still, .ytp-scroll-min.ytp-pause-overlay"
  )
  .forEach((e) => (e.style.display = "none"));
