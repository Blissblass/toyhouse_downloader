import AppStatus from "./AppStatus";
import QueueToggler from "./QueueToggler";

const Nav = (props) => {
  const {
    isOnline,
    setIsOnline,
    loading,
    setLoading,
    setError,
    viewQueue,
    setViewQueue,
  } = props;

  return (
    <div className="d-flex justify-content-between me-2 mt-2">
      <QueueToggler viewQueue={viewQueue} setViewQueue={setViewQueue} />

      <AppStatus
        isOnline={isOnline}
        setIsOnline={setIsOnline}
        loading={loading}
        setLoading={setLoading}
        setError={setError}
        viewQueue={viewQueue}
      />
    </div>
  );
};

export default Nav;
