module.exports = (id) => {
    let parsedId = id;

    switch (id) {
        case 'thenormand' || 'normand':
         parsedId = "thenormand";
          break;
  
        case 'thecristina' || 'cristina':
         parsedId = "thecristina";
          break;
  
        case 'johannescourt':
         parsedId = "johannescourt";
          break;
  
        case 'lepinelodge':
         parsedId = "lepinelodge";
          break;
  
        case 'howardgrant':
         parsedId = "howardgrant";
          break;
  
        case 'saintemilion':
         parsedId = "saintemilion";
          break;
      }

      return parsedId;
}