import { parseISO } from 'date-fns';

export interface IDate {
  sampleTextProp?: string;
  dateString: any;
}

const Date: React.FC<IDate> = ({ dateString }) => {
  const date = parseISO(dateString);
  /* console.log(date); */
  // LLLL - full month name d - day of month yyyy - 4 digit year
  return (
    <time dateTime={dateString}>
      {/* {`Written on ${format(date, 'MMMM-d-yyyy')}`} */}
    </time>
  );
};

export default Date;
