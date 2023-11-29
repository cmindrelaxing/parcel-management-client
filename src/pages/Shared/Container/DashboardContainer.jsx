import PropTypes from 'prop-types';

const DashboardContainer = ({children}) => {
    return (
        <div className='px-4 md:px-5 lg:px-20 pt-20 lg:pt-10 mx-auto'>
            {children}
        </div>
    );
};

DashboardContainer.propTypes = {
    children: PropTypes.any,
};

export default DashboardContainer;