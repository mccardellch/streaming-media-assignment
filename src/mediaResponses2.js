// const getParty = (request, response) => {
//  const file = path.resolve(__dirname, '../client/party.mp4');
//
//  // async function vv
//  fs.stat(file, (err, stats) => {
//    if (err) {
//      if (err.code === 'ENOENT') { // Error NO ENTry
//        response.writeHead(404);
//      }
//      return response.end(err);
//    }
//
//    // check if client sent range header
//    // assume starting at the beginning
//    let { range } = request.headers;
//    if (!range) {
//      range = 'bytes=0-';
//    }
//
//    // get the byte range from the request's range header
//    // get the string, replace 'bytes=' with nothing
//    // split to get an array of beginning and end pos ['0000','0001']
//    const positions = range.replace(/bytes=/, '').split('-');
//
//    // parse the first pos (starting range) to an int, with base 10
//    let start = parseInt(positions[0], 10);
//
//    const total = stats.size; // give us the total file size bytes
//
//    // check if received an end pos from client
//    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
//
//    // reset start range if start is greater than end range
//    if (start > end) {
//      start = end - 1;
//    }
//
//    // determine how big of a chunk to send to browser (in bytes)
//    const chunksize = (end - start) + 1;
//
//    // content range - how much we are sending out of the total
//    // accept ranges - tells browser what type of data to expect the range in
//    // content length - tells the browser how big this chunk is in bytes
//    // content type - tells browser the encoding type so it can reassemble the byte correctly
//
//    response.writeHead(206, {
//      'Content-Range': `bytes ${start}-${end}/${total}`,
//      'Accept-Ranges': 'bytes',
//      'Content-Length': chunksize,
//      'Content-Type': 'video/mp4',
//    });
//
//    // create a file stream
//    // {start, end} creates an obj with the var names set to the same as the ones passed in
//    const stream = fs.createReadStream(file, { start, end });
//
//    // Callback functions bc it is async
//    stream.on('open', () => {
//      stream.pipe(response); // when file opens, connect the fs to the response using 'pipe'
//    });
//
//    stream.on('error', (streamErr) => {
//      response.end(streamErr);
//    });
//
//    return stream;
//  });
// };
