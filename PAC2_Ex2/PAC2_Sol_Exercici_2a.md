```diff
diff --git a/PAC2_Ex2/Exer2-1-TODO/controllers/todo.controller.js b/PAC2_Ex2/Exer2-1-TODO/controllers/todo.controller.js
index c04cf62..3a483bd 100644
--- a/PAC2_Ex2/Exer2-1-TODO/controllers/todo.controller.js
+++ b/PAC2_Ex2/Exer2-1-TODO/controllers/todo.controller.js
@@ -13,7 +13,7 @@ class TodoController {
 
     // Explicit this binding
     this.service.bindTodoListChanged(this.onTodoListChanged);
-    this.view.bindAddTodo(this.handleAddTodo);
+    this.view.bindAddTodo(this.service.addTodo);
     this.view.bindEditTodo(this.handleEditTodo);
     this.view.bindDeleteTodo(this.handleDeleteTodo);
     this.view.bindToggleTodo(this.handleToggleTodo);
```
## Per què no es pot accedir al valor de `todos`?
```
todo.views.js:91 Array(0)
todo.service.js:23 Uncaught TypeError: Cannot read properties of undefined (reading 'todos')
    at addTodo (todo.service.js:23:10)
    at HTMLFormElement.<anonymous> (todo.views.js:107:9)
addTodo @ todo.service.js:23
(anonymous) @ todo.views.js:107
```
El valor de `this.todos` s'avalua en temps d'execució (`this` desvinculat), la sentència `this.view.bindAddTodo(this.handleAddTodo)` dins de la constructora de la classe `TodoController` cercarà la propietat `this.todos` a la classe `TodoController`, i dóna error perquè no existeix, ja que la propietat `todos` es declara a la constructora de `TodoService`. 
