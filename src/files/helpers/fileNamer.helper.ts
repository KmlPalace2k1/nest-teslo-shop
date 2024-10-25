export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  const fileExtension = file.mimetype.split('/')[1];

  const fileName = `${crypto.randomUUID()}.${fileExtension}`;

  callback(null, fileName);
};
