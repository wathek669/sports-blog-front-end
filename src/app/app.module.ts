import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WordCupEventComponent } from './components/word-cup-event/word-cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatComponent } from './components/stat/stat.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { GridColComponent } from './components/grid-col/grid-col.component';
import { MprovaComponent } from './components/mprova/mprova.component';
import { MatchesTabComponent } from './components/matches-tab/matches-tab.component';
import { HeadTabComponent } from './components/head-tab/head-tab.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { GridComponent } from './components/base/grid/grid.component';
import { PlayersComponent } from './components/players/players.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { ChartsExamplesComponent } from './components/charts-examples/charts-examples.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { AsterixPipe } from './pipes/asterix.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordCupEventComponent,
    ResultComponent,
    NewsComponent,
    BlogComponent,
    FooterComponent,
    StatComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NotFountComponent,
    BannerComponent,
    AdminComponent,
    GridColComponent,
    MprovaComponent,
    MatchesTabComponent,
    HeadTabComponent,
    TeamsTableComponent,
    GridComponent,
    PlayersComponent,
    DisplayMatchComponent,
    MatchFormComponent,
    ChartsExamplesComponent,
    AsterixPipe,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
