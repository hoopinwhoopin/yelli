// /* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Card, FileInput, Label, TextInput } from "flowbite-react";
import AdminLayout from "../../../components/AdminLayout";
import { createPhotoStory } from "../../../services/PhotoStories";

function PhotoStoryCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const file = data.image[0];
      const apiData = {
        ...data,
        image: file,
      };
      const { data: responseData, error } = await createPhotoStory(apiData);
      navigate("/admin/photostories");
      if (error) {
        console.error("Error creating photo story:", error);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };
  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-1/2 mx-auto pt-20">
          <Card>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center justify-end gap-5">
                <a href="/admin/photostories">
                  <Button color="gray">Back</Button>
                </a>
                <Button type="submit">Submit</Button>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstPersonName" value="First Name" />
                </div>
                <TextInput
                  id="firstPersonName"
                  name="firstPersonName"
                  type="text"
                  placeholder="First Name"
                  required={register("firstPersonName", { required: true })}
                />
                {errors.firstPersonName && (
                  <p className="text-red-500 text-sm">First Name is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="secondPersonName" value="Second Name" />
                </div>
                <TextInput
                  id="secondPersonName"
                  name="secondPersonName"
                  type="text"
                  placeholder="Second Name"
                  required={register("secondPersonName", { required: true })}
                />
                {errors.secondPersonName && (
                  <p className="text-red-500 text-sm">
                    Second Name is required
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  required={register("state", { required: true })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">State is required</p>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="narrativeLink" value="Narrative Link" />
                </div>
                <TextInput
                  id="narrativeLink"
                  name="narrativeLink"
                  type="text"
                  placeholder="Link"
                  required={register("narrativeLink")}
                />
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  required={register("image", { required: true })}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">Image is required</p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default PhotoStoryCreate;
