# BlazorGoogleMapsV3 #
---
### Blazor Implementation for Google Maps V3 JavaScript SDK




## Getting Started
---
1. Add the Nuget package to your project
      - `PM> Install-Package {PACKAGE NAME}`
2. After adding the Nuget Package to your solution, add the following `<script>` tags to your `index.html` or `_host.cshtml`
      - `<script src="https://maps.googleapis.com/maps/api/js?key={YOUR_KEY_HERE}&libraries=drawing,geometry"></script>`
      - It is recommended to add the `drawing` and `geometry` libraries as many of these features are implemented in this component.   
      - `<script src="_content/BlazorGoogleMapsV3/JS/map.js"></script>`
3. In your `_imports.razor` file add the following using directives:
      - `@using BlazorGoogleMapsV3.Components`
      - `@using BlazorGoogleMapsV3.Models`


## Creating The Map
---
1. Add the following component tag wherever you want to provide a map. `<Map></Map>`
2. The `<Map>` Component requires an Id by providing the `MapId="{Map Id Here}"` attribute. This should be a unique identifier and allows you to place multiple `<Map>` components on the same page at a time. 
3. It is recommended to create a `Map` reference in your blazor code to perform any operations against the map instance. 
      i. (ie. `<Map @ref="MapItem">` and then in your code `private Map MapItem { get; set; }`)

