# VS Code
## Afegir les extensions recomanades a VS Code
1. Obrir la línia d'ordres a VS Code, en macOS: ⌘⇧P
2. Executar l'ordre ```Extensions: Configure Recommended Extensions (Workspace Folder)```
3. Afegir els identificadors de les extensions al fitxer [extensions.json](.vscode/extensions.json)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - [Emmet](https://code.visualstudio.com/docs/editor/emmet)
   - [HTMLHint](https://marketplace.visualstudio.com/items?itemName=HTMLHint.vscode-htmlhint)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
   - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Configuració de Prettier
1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `default formatter`
4. Seleccionar l'opció `Prettier`


Evitar el tancament d'etiquetes void quam es dona format a documents html amb Prettier:
```
npm install -D @awmottaz/prettier-plugin-void-html
```
[prettier-plugin-void-html](https://github.com/awmottaz/prettier-plugin-void-html)

Afegir el connector al fitxer [.prettierrc.json](.prettierrc.json)
```json
{
  "plugins": ["@awmottaz/prettier-plugin-void-html"]
}
```

## Configuració d'Emmet
1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `emmet tab`
4. Habilitar l'opció `Trigger Expansion on Tab`

## Abreviatures d'Emmet
| Abreviatura | Operació |
| ----------- | -------- |
| ! | Crear un document html5 |
| .NOM | Crear un div amb la classe NOM |
| ELEMENT.NOM | Crear un ELEMENT (div, h1, p, ...) amb la classe NOM |
| ELEMENT#ID | Crear un ELEMENT (div, h1, p, ...) amb l'identificador ID |

## Dreceres de VS Code
| Drecera | Acció |
| ------- | ----- |
| ⌘ , | Obrir les preferències |
| ⌘ ⇧ P | Obrir la linia d'ordres |
| ⌘ ⇧ 7 | (des)Comentar el codi |
| ⌥ ⇧ F | Donar format al codi |
| F5 | Iniciar la depuració |
| Fn F2 | Refactor: canviar el nom |
| Fn F3 | Cercar: cercar el següent |
