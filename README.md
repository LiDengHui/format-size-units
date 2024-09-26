# @dhlx/format-size-units

A utility function to format file sizes from kilobytes (KB) to larger units like megabytes (MB), gigabytes (GB), terabytes (TB), and petabytes (PB).

## Installation

Install the package using npm or yarn:

```bash
npm install @dhlx/format-size-units
```


## Usage
You can use the function to convert a file size in kilobytes (KB) into a more readable format.

Example

```js
import formatSizeUnits from '@dhlx/format-size-units';

const fileSizeInKB = 10240; // 10 MB in KB
const formattedSize = formatSizeUnits(fileSizeInKB);

console.log(formattedSize); // Output: "10.00 MB"
```

## API
formatSizeUnits(kb: number): string

* Formats a size in kilobytes to a more human-readable format, selecting the appropriate unit based on the size.

Parameters:
    
* kb (number): The file size in kilobytes.

Returns:

* string: A string representation of the formatted size with two decimal places and the appropriate unit (KB, MB, GB, etc.).
## License
This project is licensed under the MIT License.