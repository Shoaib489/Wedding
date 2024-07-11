import { useRouter } from 'next/router';
import PreWedding from '../prewed';
import Wedding from '../wedding';

const Films = () => {

  const router = useRouter();
  const { slug } = router.query; 


  return (
    <div>
      {slug === "prewed" ? <PreWedding /> : <Wedding />}
    </div>
  );
};

export default Films;
