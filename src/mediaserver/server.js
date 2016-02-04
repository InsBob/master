var hbjs = require('handbrake-js');

hbjs.spawn({ input: 'IMG_4192.MOV', output: 'sample.mp4' })
  .on('error', function(err){
    // invalid user input, no video found etc
  })
  .on('progress', function(progress){
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    );
  });

var FFmpeg =require('fluent-ffmpeg');
var proc = new FFmpeg('sample.mp4')
  .takeScreenshots({
      count: 1,
      timemarks: [ '60' ] // number of seconds
    }, '/home/abhibel/instabob/media', function(err) {
    console.log('screenshots were saved');
  });

var s3 = require('s3');

var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 209715200, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-west-1'
  },
});

var params = {
  localFile: 'sample.mp4',

  s3Params: {
    Bucket: 'sk-images',
    Key: 'some/remote/file',
  },
};
var uploader = client.uploadFile(params);
uploader.on('error', function(err) {
  console.error('unable to upload:', err.stack);
});
uploader.on('progress', function() {
  console.log('progress', uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log('done uploading');
});
