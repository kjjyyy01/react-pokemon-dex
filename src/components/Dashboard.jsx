const data = [
  {
    img_path: "/image/monsterBall-img.png",
  },
  {
    img_path: "/image/monsterBall-img.png",
  },
  {
    img_path: "/image/monsterBall-img.png",
  },
  {
    img_path: "/image/monsterBall-img.png",
  },
  {
    img_path: "/image/monsterBall-img.png",
  },
  {
    img_path: "/image/monsterBall-img.png",
  },
];

const Dashboard = () => {
  return (
    <>
      <header>
        <h1>나만의 포켓몬 도감</h1>
        <ul>
          {data.map((element) => {
            return (
              <li key={element.img_path}>
                <img src="/image/monsterBall-img.png" alt="" />
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Dashboard;
