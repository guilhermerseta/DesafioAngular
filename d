warning: LF will be replaced by CRLF in src/app/app.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/app.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/pages/home/home.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/pages/home/home.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/rodape/rodape.component.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/rodape/rodape.component.ts.
The file will have its original line endings in your working directory
[1mdiff --git a/src/app/app.component.html b/src/app/app.component.html[m
[1mindex 55b1560..266d847 100644[m
[1m--- a/src/app/app.component.html[m
[1m+++ b/src/app/app.component.html[m
[36m@@ -1,6 +1,7 @@[m
 <div class = "board">[m
     <app-cabecalho></app-cabecalho>[m
     <router-outlet></router-outlet>[m
[31m-    <app-rodape></app-rodape>[m
[32m+[m[32m    <app-rodape [name] = "name" (cidadeFit)="setCidade($event)"></app-rodape>[m
[32m+[m[32m    <h6>{{cidade}}</h6>[m
 </div> [m
 [m
[1mdiff --git a/src/app/app.component.ts b/src/app/app.component.ts[m
[1mindex 43756a7..5b1fa8f 100644[m
[1m--- a/src/app/app.component.ts[m
[1m+++ b/src/app/app.component.ts[m
[36m@@ -7,4 +7,11 @@[m [mimport { Component } from '@angular/core';[m
 })[m
 export class AppComponent {[m
   title = 'desafio';[m
[32m+[m
[32m+[m[32m  public cidade: string = "";[m
[32m+[m[32m  public name = "FIT";[m
[32m+[m
[32m+[m[32m  public setCidade(texto:string){[m
[32m+[m[32m    this.cidade = texto;[m
[32m+[m[32m  }[m
 }[m
[1mdiff --git a/src/app/pages/home/home.component.css b/src/app/pages/home/home.component.css[m
[1mindex c51eb28..1c16663 100644[m
[1m--- a/src/app/pages/home/home.component.css[m
[1m+++ b/src/app/pages/home/home.component.css[m
[36m@@ -5,5 +5,5 @@[m
 .padawan{[m
     height: 300px;[m
     width: 300px;[m
[31m-    margin-left: 530px;[m
[32m+[m[32m    margin-left: 600px;[m
 }[m
[1mdiff --git a/src/app/pages/home/home.component.html b/src/app/pages/home/home.component.html[m
[1mindex 30f4ea3..bfcaef7 100644[m
[1m--- a/src/app/pages/home/home.component.html[m
[1m+++ b/src/app/pages/home/home.component.html[m
[36m@@ -9,4 +9,3 @@[m
 [m
 <img src="https://media1.popsugar-assets.com/files/thumbor/ZZW1numDjY1oQIF4h6DncxtFAw8/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/09/27/859/n/24155406/8e79a59159cbfdfe86b8a9.76001991_il_fullxfull.1104865687_6mk8/i/Jedi-Padawan.jpg" class = "padawan">[m
 [m
[31m-<app-rodape [name]="name"></app-rodape>[m
\ No newline at end of file[m
[1mdiff --git a/src/app/pages/home/home.component.ts b/src/app/pages/home/home.component.ts[m
[1mindex 6cfacba..157929e 100644[m
[1m--- a/src/app/pages/home/home.component.ts[m
[1m+++ b/src/app/pages/home/home.component.ts[m
[36m@@ -13,7 +13,6 @@[m [mexport class HomeComponent implements OnInit {[m
  [m
   constructor(private introducao: PadawanService) { }[m
   [m
[31m-  @Output() name: string = "FIT";[m
 [m
   ngOnInit(): void {[m
   }[m
[1mdiff --git a/src/app/rodape/rodape.component.html b/src/app/rodape/rodape.component.html[m
[1mindex ecd7213..616a80f 100644[m
[1m--- a/src/app/rodape/rodape.component.html[m
[1m+++ b/src/app/rodape/rodape.component.html[m
[36m@@ -1,5 +1,5 @@[m
 <br><br><br>[m
[31m-<h1>{{name}}</h1>[m
[32m+[m[32m<h1>{{name}} </h1>[m
 <h6>Somos uma empresa situada em Sorocaba/Sp</h6>[m
 <h6>Tentamos trazer o melhor para cada colaborador</h6>[m
 [m
[1mdiff --git a/src/app/rodape/rodape.component.ts b/src/app/rodape/rodape.component.ts[m
[1mindex 6d48841..80ad0e2 100644[m
[1m--- a/src/app/rodape/rodape.component.ts[m
[1m+++ b/src/app/rodape/rodape.component.ts[m
[36m@@ -1,4 +1,4 @@[m
[31m-import { Component, OnInit, Input } from '@angular/core';[m
[32m+[m[32mimport { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';[m
 [m
 @Component({[m
   selector: 'app-rodape',[m
[36m@@ -10,8 +10,9 @@[m [mexport class RodapeComponent implements OnInit {[m
   constructor() { }[m
 [m
   @Input() name: string;[m
[32m+[m[32m  @Output() cidadeFit = new EventEmitter<string>();[m
 [m
   ngOnInit(): void {[m
[32m+[m[32m    this.cidadeFit.emit("Sorocaba");[m
   }[m
[31m-[m
 }[m
