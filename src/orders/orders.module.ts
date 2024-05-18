import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    NatsModule,
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICE, //PRODUCT_SERVICE,
    //     transport: Transport.NATS, //TCP,
    //     options: {
    //       servers: envs.natsServers,
    //       // host: envs.productsMicroservicesHost,
    //       // port: envs.productsMicroservicesPort,
    //     },
    //   },
    // ]),
  ],
})
export class OrdersModule {}
