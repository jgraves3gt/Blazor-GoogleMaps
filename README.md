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

