import styles from './index.module.scss'
import { Image } from "@nextui-org/react";
import type { ProjectDataType } from '@/models/projectType';

const ProjectImageCard: React.FC<{ project: ProjectDataType[] }> = ({ project }) => {

 return (
   <>
      {
          project.map(item => {
            return (
              <div key={item.name} className="flex justify-center">
                <div className={`${styles.wrapper} flex flex-col`} >
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.imgCard}
                    src={item.img}
                    alt={item.name}
                    width={'100%'}
                    height={'100%'}
                    objectFit={'fill'}
                  />
                  {
                    item.url && <div className={styles.link}>
                    <a className={styles.details} href={item.url} target="_blank">
                      详情
                    </a>
                  </div>
                  }
                </div>
                <div className='mt-2'>
                  <p className="text-center mt-1 lg:mt-0.5 text-xl font-sans">{item.name}</p>
                </div>
              </div>
              </div>
              
            )
          })}

   </>
 );
};

export default ProjectImageCard;
