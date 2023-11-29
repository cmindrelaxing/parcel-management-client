import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className='px-4 md:px-5 lg:px-10 xl:px-0 max-w-[1240px] mx-auto'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;