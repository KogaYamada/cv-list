// やること
/*
 -- 1 --
 「追加」ボタンを押すと、<ul id="list">の最後に<li>要素が追加される。
  このとき、<li>のテキストはアイテム1, アイテム2, ...のようにその要素が
  何番目かに応じて番号を振る。
  1. 追加ボタン要素の取得 ---
  2. 追加ボタンを押した時に何かが起きる ---
  3. 追加したい要素を作成する + テキストを入れる ---
  4. ulタグを取得する ---
  5. 作成した要素をulタグの中に入れる(最後の要素として) ---
  6. 作成した要素(liタグ)のテキストに番号をふる ---

  -- 2 --
 「削除」ボタンを押すと、<ul id="list">の最後の<li>要素が削除される。
  ただし、1つも<li>要素がなくても、コンソールにエラーが表示されないようにする。
  1. 削除ボタンの取得 ---
  2. 削除ボタンを押した時に何かが起きる ---
  3. ulタグの最後の子要素を取得する element.lastElementChild ---
  4. 4で取得した要素を削除 ---
  5. ulタグの子要素にliタグがない時に削除を実行しない ---
  5-1. itemCountの数が0の時に削除しない ---

  -- 3 --
  各<li>が以下のように画像つきになるように機能追加してください。
  1. listItemのtextContentを削除 ---
  2. imgタグを作成する ---
  3. imgタグに属性を追加する(srcとalt) ---
  4. liタグの中に作成したimgタグを追加する ---
  5. spanタグを作成する ---
  6. spanタグのtextContentを追加する ---
  7. listに作成したspanタグを追加する ---
*/
const addBtn = document.getElementById('add');
const list = document.getElementById('list');
const removeBtn = document.getElementById('remove');
let itemCount = 0;

// 追加ボタンにクリックイベントを追加
// 追加ボタンを押した時の処理
addBtn.addEventListener('click', () => {
  // 要素の作成
  const listItem = document.createElement('li'); // liタグを作成して変数listItemに格納
  const img = document.createElement('img'); // imgタグを作成して変数imgに格納
  const span = document.createElement('span'); // spanタグを作成して変数spanに代入

  // 属性(情報)を追加するブロック
  img.src = 'http://placehold.it/64x64'; // imgタグのsrc属性を追加
  img.alt = `アイテム${itemCount + 1}`; // imgタグのalt属性を追加
  span.textContent = `アイテム${itemCount + 1}`;

  // 作成した要素を追加するブロック
  listItem.appendChild(img); // 作成したliタグの中に作成したimgタグを追加する
  listItem.appendChild(span); // 作成したliタグの中に作成したspanタグを追加する
  list.appendChild(listItem); // ulタグの子要素の一番後ろにlistItemを追加
  itemCount++;
});

// 削除ボタンを押した時のイベントを設定
removeBtn.addEventListener('click', () => {
  if (itemCount === 0) {
    return;
  }
  // 押した時に起きる何か
  const lastListItem = list.lastElementChild;
  list.removeChild(lastListItem);
  itemCount--;
});

document.getElementById('ch').addEventListener('click', () => {
  console.log(itemCount);
});
