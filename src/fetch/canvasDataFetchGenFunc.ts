import {ICanvasCallConfig} from "@/canvasUtils";
import {CanvasData} from "@/canvasDataDefs";
import {getPagedDataGenerator} from "@/fetch/getPagedDataGenerator";
import {overrideConfig} from "@canvas/fetch/utils";


type UrlFuncType<UrlParams extends Record<string, any>> = (args: UrlParams, config?: ICanvasCallConfig) => string

export function canvasDataFetchGenFunc<
    Content extends CanvasData,
    UrlParams extends Record<string, any>
>(urlFunc: UrlFuncType<UrlParams>, defaultConfig?: ICanvasCallConfig) {

    return function (args: UrlParams, config?: ICanvasCallConfig) {
        config = overrideConfig(defaultConfig, config);
        const url = urlFunc(args, config);
        return getPagedDataGenerator<Content>(url, config);
    }
}

