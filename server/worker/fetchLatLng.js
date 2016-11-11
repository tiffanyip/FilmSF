const Cron = require('cron');
const Movies = require('../movies/movies-model');
const helper = require('../helper/queryPlace');

const CronJob = Cron.CronJob;
const job = new CronJob('*/10 * * * * *',
  () => {
    console.log('worker started');
    // find entry from db with no address
    Movies.findOne({ address: '' }, (err, entry) => {
      if (err) {
        console.log(err);
      } else if (!entry) {
        console.log('work done');
      } else if (!entry.locations || entry.locations === '') {
        Movies.update({ _id: entry._id }, { address: 'not found' }).exec();
      } else {
        // query place ID
        helper.queryPlace(entry);
      }
    });
  },
  () => {
    console.log('job ended');
  },
  true,
  'America/Los_Angeles'
);
job.start();
