// 컬럼 선택
const columnItems = document.querySelectorAll('.column-item');

columnItems.forEach((columnItem) => {
  const checkButton = columnItem.querySelector('.btn-column-check');

  checkButton.addEventListener('click', (event) => {
    event.stopPropagation();

    columnItems.forEach((item) => {
      item.classList.remove('active');
    });

    columnItem.classList.add('active');
  });
});

// 댓글 수정 창
const commentItems = document.querySelectorAll('.comment-item');

commentItems.forEach((commentItem) => {
  const editButton = commentItem.querySelector('.btn-comment-edit');
  const commentContent = commentItem.querySelector('.comment-content');
  const commentEditContent = commentItem.querySelector('.comment-edit-content');

  editButton.addEventListener('click', () => {
    commentContent.style.display = 'none';
    commentEditContent.style.display = 'block';
  });
});

//-- 지금 접속하고 있는 board_id값 추출 --//
const currentPath = window.location.pathname;
const id = currentPath.match(/\d+/)[0]; // 경로에서 숫자 값 추출
console.log(id); // 추출된 숫자 값 출력
