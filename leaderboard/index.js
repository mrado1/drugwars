getData();

function getData(){
  $.get("https://api.airtable.com/v0/appAGVmL1tQRoBB2N/tblDF8jCbwPYyEv2I?api_key=key2SAzZw9EUix1pr&fields%5B%5D=name&fields%5B%5D=netWorth&maxRecords=10&sort%5B0%5D%5Bfield%5D=netWorth&sort%5B0%5D%5Bdirection%5D=desc", function(data) {

    // Get records object
    var users_array = data.records;

    // Set variable for row html string
    var tbody = $("<tbody />"),tr;

    // Loop through each parent object
    $.each(users_array, function( index, users ) {

      // Create row for each parent object
      tr = $("<tr />");

      // Get index number for rank
      var rank = index + 1;
      console.log( rank );

      // Append to row
      tr.append( "<td>" + rank + "</td>" )

      $.each(users.fields, function( index2, value ) {

        // console.log( index2 + ": " + value );

        // Append to row
        tr.append( "<td>" + value + "</td>" )

      });

      // Append to table body
      tr.appendTo(tbody);

    });

    // Append to table
    tbody.appendTo("#table1"); // only DOM insertion

  });
}
