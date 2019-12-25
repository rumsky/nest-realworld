import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { MinerType, MinerInputType } from './miner.types';
import { MinerService } from './miners.service';

@Resolver()
export class MinersResolver {
  constructor(private readonly minerService: MinerService) {}

  /*
    {
      miners {
        ip
        id
        sn
        hashrate
      }
    }
  */
  @Query(returns => [MinerType], { name: 'miners' })
  async getMiners() {
    return await this.minerService.getAll();
  }

  /*
    mutation {
      addMiner(minerData: {ip:"sfdfdf", sn:"fdfdrerere", hashrate:233}){
        id
        ip
        sn
        hashrate
      }
    }
  */
  @Mutation(() => MinerType)
  async addMiner(@Args('minerData') minerData: MinerInputType) {
    return await this.minerService.insertMiner(
      minerData.ip,
      minerData.sn,
      minerData.hashrate,
    );
  }
}
