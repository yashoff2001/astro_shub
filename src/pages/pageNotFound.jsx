import pageNotFound from '../assets/svg/404.svg';

const PageNoteFound = () => {
  return (
    <div className="px-5 md:px-20 bg-gray-200 h-[100dvh] flex justify-center items-end sm:items-center">
      <img src={pageNotFound} alt="404 Page Not Found" style={{height:"300px"}} />
    </div>
  );
};

export default PageNoteFound;