const getTransitionStyles = timeout => {
  return {
    entering: {
      height: '100vh'
    },
    entered: {
      transition: `height ${timeout}ms ease-in-out`,
      height: 0,
    },
    exiting: {
      transition: `height ${timeout}ms ease-out-in`,
      height: '100vh',
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
