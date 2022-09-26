import { TimeContainer } from './Time.styled';

export interface ITime {
  sampleTextProp?: string;
}

const Time: React.FC<ITime> = () => {
  return (
    <TimeContainer>
      <div>
        <div>
          <h3>Time</h3>
          <p>Saturday, October 8th 2022 </p>
          <p>4:00pm-7:00pm</p>
        </div>
      </div>
    </TimeContainer>
  );
};

export default Time;
