import Skeleton from '@mui/material/Skeleton';
import Styles from "./CourseSkeleton.module.css";

function CourseSkeleton() {
    return (
        <div className={Styles.container}>
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
            <Skeleton variant="rounded" width={220} height={260} />
        </div>
    )
}

export default CourseSkeleton;