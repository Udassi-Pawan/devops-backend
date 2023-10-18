import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GroupsModule } from "./groups/groups.module";
import { ChatModule } from "./chat/chat.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    GroupsModule,
    ConfigModule.forRoot(),

    MongooseModule.forRoot(
      `mongodb+srv://pawankumarudassi:${process.env.MONGO_PASS}@cluster0.gosbfg9.mongodb.net/?retryWrites=true&w=majority`
    ),
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
