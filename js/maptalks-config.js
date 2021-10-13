/* 
    * General Info *
    urlTemplate : Leave it as it is.
    subdomains : Leave it as it is.
    attribution : Attribution text displayed at the bottom right corner.
    centerCoords : The center coordinates of the event.
    maxDistanceFromEvent : The maximum distance b/w user and the event's center coordinates to trigger "far away" warning.  
    eventOutlineCoords : The ouline coordinates for the event used.
*/

const maptalksConfig = {
    urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution: "Coming Out Party",
    centerCoords: [77.21995, 28.59358],
    centerlat: 28.59358,
    centerlon: 77.21995,
    maxDistanceFromEvent: 2000000,
    eventOutlineCoords: [
        [77.21582, 28.58991],
        [77.2158, 28.59077],
        [77.21882, 28.59401],
        [77.21822, 28.59457],
        [77.22034, 28.59695],
        [77.22066, 28.59701],
        [77.22276, 28.597],
        [77.22303, 28.59708],
        [77.2232, 28.59699],
        [77.22337, 28.59447],
        [77.22107, 28.59315],
        [77.22128, 28.59047],
        [77.21582, 28.58991],
    ],
};
