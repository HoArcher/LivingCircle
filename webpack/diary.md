### tsconfig.json和webpack中的ts-loader扮演的角色略有不同：

1. **tsconfig.json的作用**：它为TypeScript编译器（tsc）提供项目范围内的编译配置，例如指定编译目标ES版本、模块系统等。这个配置文件被tsc直接使用，并且可以用于IDE中提供更好的编辑器支持，如智能感知、错误提示等。

2. **webpack中ts-loader的作用**：当你在webpack项目中使用TypeScript时，ts-loader是一个必需的加载器（loader），用于将TypeScript代码转换为JavaScript。在webpack的构建过程中，每当遇到`.ts`或`.tsx`文件，ts-loader会调用TypeScript编译器编译这些文件。

3. **两者的配置关系**：在一些情况下，tsconfig.json和ts-loader的配置可以共享，比如指定的TypeScript版本。然而，它们也可以有各自独立的设置——例如，ts-loader会使用webpack的resolve配置来查找模块，而tsconfig.json可能包含其他编译器标记和编译选项。

4. **为啥还需要ts-loader**：尽管tsconfig.json设置了TypeScript的编译参数，但如果没有ts-loader（或其他相应的加载器），在webpack构建过程中，webpack将不知道如何处理`.ts`或`.tsx`文件。ts-loader确保了webpack能够正确识别和处理TypeScript文件，并将它们转换成JavaScript，让它们能在浏览器中运行。

综上所述，虽然tsconfig.json负责TypeScript的编译配置，但你还需要在webpack配置中使用ts-loader来处理和编译TypeScript文件，二者配合使用确保TypeScript代码能在webpack构建流程中被正确编译和打包。