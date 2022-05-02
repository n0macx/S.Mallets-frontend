const mainStyle = {
  background: 'grey',
  display: 'flex',
  margin: '0 auto',
  width: '80%',
  height: 'calc(100vh - 4rem)',
  justifyContent: 'space-between',
  padding: '1rem 1rem',
};

const AboutUs = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      AboutUs
    </div>
  );
};
export default AboutUs;