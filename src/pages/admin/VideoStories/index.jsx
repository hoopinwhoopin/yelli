// /* eslint-disable no-unused-expressions */
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { getVideoStories } from "../../../services/VideoStories";
import useFetchData from "../../../customHooks/useFetchData";

function VideoStories() {
  const { videoStoriesData, fetchVideoStories } = useFetchData();

  useEffect(() => {
    fetchVideoStories();
  }, []);

  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-full">
          <Card>
            <div className="ml-auto">
              <a href="/admin/VideoStories/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>First Name</TableHeadCell>
                  <TableHeadCell>Second Name</TableHeadCell>
                  <TableHeadCell>State</TableHeadCell>
                  <TableHeadCell>Image</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {videoStoriesData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.firstPersonName}
                      </TableCell>
                      <TableCell> {data?.secondPersonName}</TableCell>
                      <TableCell>{data?.state}</TableCell>
                      <TableCell>
                        <img
                          src={data.image}
                          alt="image"
                          height={20}
                          width={20}
                        />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/admin/videostories/edit/${data?.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default VideoStories;
