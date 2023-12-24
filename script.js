function openTwoLinks() {
  // Specify your YouTube video URLs
  var link1 = "https://www.youtube.com/watch?v=jahcdtqUedY&ab_channel=jrme421";
  var link2 = "https://www.youtube.com/watch?v=NRkOr3cxA9Y&ab_channel=jrme421";

  // Open the first link in a new tab
  var tab1 = window.open(link1, "_blank");

  // Open the second link in a new tab
  var tab2 = window.open(link2, "_blank");

  // Focus on the first tab
  tab1.focus();
}
