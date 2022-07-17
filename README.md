[DEMO LINK](https://Andriyk0.github.io/trip/)

Create a simple React project which reads data from the Vamoos API and outputs a visual
representation of a journey using data from the following URI:
https://live.vamoos.com/api/itineraries/VMD-VL1234
Specifically, read the data from within the "brief" property. This is an array of data for different parts of
a trip.
Each part has a headline (headline property) and description (shortInformation). An image is also
there (dailyPhoto) -- along with a documents array for documents or URLs to be linked to. There is
also an optional location -- please display the location name if there.
You will also find a flightIds array -- this references flights from the "flights" section further below in
the response. Please use this so any flights are displayed as well, including their places of departure
and arrival and times.
Make it so that each brief part has its own URL, e.g. /brief/1, /brief/2 etc and these change
dynamically in the browser. Also make sure that if a value is used that does not correspond to a valid
entry that an appropriate error is displayed.
Make the root page forward to /brief/ -- and make the /brief/ page list the various parts in a summary
overview, each entry linking to the appropriate URL for each part.
Allow the user to navigate between these using arrows on either side of the screen or use a link to
come back to the main /brief/ page.
Make sure the result looks fine on both desktop and mobile formats and generally responds
dynamically to resizing windows.