/**
 * This class represents files on disk.
 *
 * @see FileSystem
 */
inherit(IO, {
  /**
   * Opens a new file at the location of `filename`
   *
   * @param filename [String] the location on disk of the file to open.
   * @param access [String] a combination or 'r' and 'w' for access modes.
   */
  constructor: function (filename, access) {},

  /**
   * Reads from the open file
   *
   * @param numBytes [number] the number of bytes to read. Leave this
   *   empty to read all remaining data.
   * @return [Buffer] the data read from disk as a buffer.
   */
  read: function (numBytes) {},
});
