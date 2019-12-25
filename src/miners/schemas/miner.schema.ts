import * as mongoose from 'mongoose';

export const MinerSchema = new mongoose.Schema({
  ip: String,
  sn: String,
  hashrate: Number,
});
